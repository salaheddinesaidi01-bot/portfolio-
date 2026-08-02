import prisma from '../config/db.js';

let inMemoryMessages = [];

export const submitContactForm = async (req, res) => {
  try {
    const { nom, email, message } = req.body;

    if (!nom || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Tous les champs (nom, email, message) sont requis."
      });
    }

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Veuillez fournir une adresse email valide."
      });
    }

    let savedMessage;

    if (prisma) {
      try {
        savedMessage = await prisma.message.create({
          data: {
            nom,
            email,
            message
          }
        });
      } catch (dbErr) {
        console.warn('PostgreSQL insert warning, using memory storage:', dbErr.message);
      }
    }

    if (!savedMessage) {
      savedMessage = {
        id: Date.now(),
        nom,
        email,
        message,
        date_envoi: new Date()
      };
      inMemoryMessages.push(savedMessage);
    }

    return res.status(201).json({
      success: true,
      message: "Votre message a été envoyé avec succès ! Merci de votre prise de contact.",
      data: savedMessage
    });
  } catch (error) {
    console.error('Error handling contact submission:', error);
    return res.status(500).json({
      success: false,
      message: "Une erreur est survenue lors de l'enregistrement de votre message."
    });
  }
};

export const getMessages = async (req, res) => {
  try {
    if (prisma) {
      const dbMessages = await prisma.message.findMany({
        orderBy: { date_envoi: 'desc' }
      });
      if (dbMessages && dbMessages.length > 0) {
        return res.status(200).json({ success: true, data: dbMessages });
      }
    }
    return res.status(200).json({ success: true, data: inMemoryMessages });
  } catch (error) {
    return res.status(200).json({ success: true, data: inMemoryMessages });
  }
};

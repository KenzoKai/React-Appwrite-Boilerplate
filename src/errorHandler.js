import axios from 'axios';


async function sendErrorToDiscord(errorMessage) {
    const webhookUrl = process.env.REACT_APP_DISCORD_ERROR_HOOK;

    const data = {
        content: `Error message: ${errorMessage}.`,
    };

    try {
        await axios.post(webhookUrl, data);
        console.log('Error message sent to Discord channel.');
    } catch (error) {
        console.error('Error sending message to Discord:', error);
    }
}

export { sendErrorToDiscord };
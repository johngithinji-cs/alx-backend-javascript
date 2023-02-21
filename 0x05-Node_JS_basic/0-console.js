/**
 * Displays a message on the STDOUT.
 * @param {string}msg the message to display
 * @author John Mathai Githinji
 */
const displayMessage = (msg) => {
    process.stdout.write(msg);
};

module.exports = displayMessage;
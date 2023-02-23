/**
 * Contains the miscellaneous route handlers.
 * @author John Githinji <https://github.com/johngithinji-cs>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;

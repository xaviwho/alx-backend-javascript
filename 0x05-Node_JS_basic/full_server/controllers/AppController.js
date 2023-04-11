/**
 * Contains the miscellaneous route handlers.
 * @author Samuel Anozie <https://github.com/samcoded>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;

import HTTP_STATUS from '../../enums/http-status.enum';
import UnauthorizedException from '../../exceptions/unauthorized.exception';
import CustomResquest from '../../interfaces/custom-request.interface';
import CustomResponse from '../../interfaces/custom-response.interface';
import TicketService from '../../services/tickets/tickets.service';

const ticketService = new TicketService();

class TicketController {
  public static async add(request: CustomResquest, response: CustomResponse) {
    const { body: { eventId }, loggedUser } = request;

    try {
      if (!loggedUser) {
        throw new UnauthorizedException();
      }

      const added = await ticketService.add(eventId, loggedUser);

      response.status(HTTP_STATUS.OK).json(added);
    } catch (err) {
      console.log(err);
      response.errorHandler && response.errorHandler(err);
    }
  }

  public static async remove(request: CustomResquest, response: CustomResponse) {
    const { params: { eventId }, loggedUser } = request;

    try {
      if (!loggedUser) {
        throw new UnauthorizedException();
      }

      const { password, ...user } = await ticketService.remove(+eventId, loggedUser);

      response.status(HTTP_STATUS.OK).json(user);
    } catch (err) {
      response.errorHandler && response.errorHandler(err);
    }
  }
}

export default TicketController;

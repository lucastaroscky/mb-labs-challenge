import { Request } from 'express';
import HTTP_STATUS from '../../enums/http-status.enum';
import CustomResponse from '../../interfaces/custom-response.interface';
import EventService from '../../services/event/event.service';

const eventService = new EventService();

class EventController {
  public static async listOne(request: Request, response: CustomResponse) {
    try {
      const { params: { id } } = request;
      const event = await eventService.listOne(+id);

      response.status(HTTP_STATUS.OK).json(event);
    } catch (err) {
      response.errorHandler && response.errorHandler(err);
    }
  }

  public static async list(_request: Request, response: CustomResponse) {
    try {
      const event = await eventService.list();

      response.status(HTTP_STATUS.OK).json(event);
    } catch (err) {
      response.errorHandler && response.errorHandler(err);
    }
  }

  public static async create(request: Request, response: CustomResponse) {
    try {
      const { body } = request;
      const event = await eventService.create(body);

      response.status(HTTP_STATUS.CREATED).json(event);
    } catch (err) {
      response.errorHandler && response.errorHandler(err);
    }
  }

  public static async update(request: Request, response: CustomResponse) {
    try {
      const { body, params: { id } } = request;

      const event = await eventService.update(+id, body);

      response.status(HTTP_STATUS.OK).json(event);
    } catch (err) {
      response.errorHandler && response.errorHandler(err);
    }
  }

  public static async delete(request: Request, response: CustomResponse) {
    try {
      const { params: { id } } = request;

      const event = await eventService.delete(+id);

      response.status(HTTP_STATUS.OK).json(event);
    } catch (err) {
      response.errorHandler && response.errorHandler(err);
    }
  }
}

export default EventController;

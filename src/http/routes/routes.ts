import { Router } from "express";

import uploadRoutes from '../../modules/upload/http/routes/upload.routes'

const routes = Router();

routes.use('/upload', uploadRoutes);

export default routes;
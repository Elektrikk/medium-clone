import { Hono } from 'hono'
import { PrismaClient, User } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

import { blogRouter } from './routes/blog';
import { userRouter } from './routes/user';


const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  },
  Variables: {
      userId: string
  }
}>();

app.route(`api/v1/user`, userRouter);
app.route(`api/v1/blog`, blogRouter);

export default app

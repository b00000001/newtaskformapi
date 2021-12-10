import express, { Request, Response } from 'express';
const app = express();
const PORT = process.env.PORT || 3000;
import router from './controllers';

app.use(router);

// ---------- Server start ----------
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

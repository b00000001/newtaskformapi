import cors from 'cors';
import express, { Request, Response } from 'express';
const app = express();
const PORT = process.env.PORT || 3000;
import router from './controllers';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

// ---------- Server start ----------
app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`Server is running on port ${PORT}`);
});

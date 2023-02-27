const express = require(`express`);
const app = express();

const swaggerUi = require(`swagger-ui-express`);

const swaggerDocument = require(`./swaggerUi.json`);

app.use(`/api`, swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = 3000 || process.env.PORT;
app.use(express.json());

app.use(require(`./router/postRouter`));
app.use(require(`./router/userRouter`));

const mongoose = require(`mongoose`);
mongoose.set("strictQuery", false);

mongoose
  .connect(`mongodb://localhost:27017/post`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`app running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(`catch error in connection to the database`, error);
  });

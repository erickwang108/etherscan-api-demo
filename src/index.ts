import app from './app';

const port = process.env.PORT || 3000;

try {
  app.listen(port, () => {
    console.log(`Express server started on port: ${port}`);
  });
} catch (err) {
  console.error(err);
  process.exit();
}

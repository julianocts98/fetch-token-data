const express = require("express");
const cors = require("cors");
const fetcher = require("./fetcher");

const port = 3000;
const app = express();

app.use(cors());

app.get("/token/:tokenAddress", async (req, res) => {
  const tokenAddress = req.params.tokenAddress;

  try {
    const result = await fetcher.fetchTokenDataByAddress(tokenAddress);
    const resultJson = { data: result };
    res.status(200).send(resultJson);
  } catch (error) {
    const errorJson = {
      error: {
        code: 404,
        message: error.toString(),
      },
    };
    res.status(404).send(errorJson);
  }
});

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});

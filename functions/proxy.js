import fetch from 'fetch';

exports.handler = async (event, context) => {
  const { url } = event.queryStringParameters;

  try {
    const response = await fetch(url);

    return {
      statusCode: 200,
      body: JSON.stringify(await response.json()),
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};

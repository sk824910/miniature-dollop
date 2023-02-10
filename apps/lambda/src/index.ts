exports.handler = async function (event: any, context: { logStreamName: any }) {
  console.log("ENVIRONMENT VARIABLES\n" + JSON.stringify(process.env, null, 2));
  console.log("EVENT\n" + JSON.stringify(event, null, 2));

  console.log("steve", "this is a test");
  return context.logStreamName;
};

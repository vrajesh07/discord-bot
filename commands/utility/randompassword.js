module.exports = {
  name: "newpass",
  description: "Genrate random password",
  execute(message) {
    const char =
      "4M&I75^gu8XWrYOwDvZkJ*hUd9eoEFtp#$LHmG!qi1SfbsnPayTRK3Vz2c@AQC%B6jxNl0";
    var pass = "Random password is:  ";

    for (i in pass) {
      pass += char.charAt(Math.floor(Math.random() * 70));
    }
    message.author.send(pass);
  },
};

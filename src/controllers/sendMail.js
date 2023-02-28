const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const { OAuth2 } = google.auth;
const OAUTH_PLAYGROUND = "https://developers.google.com/oauthplayground";

const {
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  SENDER_EMAIL_ADDRESS,
} = process.env;

const oauth2Client = new OAuth2(
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  OAUTH_PLAYGROUND
);

// send mail
const sendEmail = (toAddress, url, text, subject) => {
  oauth2Client.setCredentials({
    refresh_token: MAILING_SERVICE_REFRESH_TOKEN,
  });

  const accessToken = oauth2Client.getAccessToken();
  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: SENDER_EMAIL_ADDRESS,
      clientId: MAILING_SERVICE_CLIENT_ID,
      clientSecret: MAILING_SERVICE_CLIENT_SECRET,
      refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
      accessToken,
    },
  });

  const mailOptions = {
    from: SENDER_EMAIL_ADDRESS,
    to: toAddress,
    subject: subject,
    text: text,
    html: `
        <html ⚡4email data-css-strict>
        <head>
          <meta charset="utf-8" />
          <meta name="x-apple-disable-message-reformatting" />
          <style amp4email-boilerplate>
            body {
              visibility: hidden;
            }
          </style>
      
          <script async src="https://cdn.ampproject.org/v0.js"></script>
      
          <style amp-custom>
            .u-row {
              display: flex;
              flex-wrap: nowrap;
              margin-left: 0;
              margin-right: 0;
            }
      
            .u-row .u-col {
              position: relative;
              width: 100%;
              padding-right: 0;
              padding-left: 0;
            }
      
            .u-row .u-col.u-col-100 {
              flex: 0 0 100%;
              max-width: 100%;
            }
      
            @media (max-width: 767px) {
              .u-row:not(.no-stack) {
                flex-wrap: wrap;
              }
              .u-row:not(.no-stack) .u-col {
                flex: 0 0 100%;
                max-width: 100%;
              }
            }
      
            body {
              margin: 0;
              padding: 0;
            }
      
            table,
            tr,
            td {
              vertical-align: top;
              border-collapse: collapse;
            }
      
            p {
              margin: 0;
            }
      
            .ie-container table,
            .mso-container table {
              table-layout: fixed;
            }
      
            * {
              line-height: inherit;
            }
      
            table,
            td {
              color: #000000;
            }
      
            a {
              color: #0000ee;
              text-decoration: underline;
            }
          </style>
        </head>
      
        <body
          class="clean-body u_body"
          style="margin: 0; padding: 0; background-color: #f9f9f9; color: #000000"
        >
          <!--[if IE]><div class="ie-container"><![endif]-->
          <!--[if mso]><div class="mso-container"><![endif]-->
          <table
            style="
              border-collapse: collapse;
              table-layout: fixed;
              border-spacing: 0;
              vertical-align: top;
              min-width: 320px;
              margin: 0 auto;
              background-color: #f9f9f9;
              width: 100%;
            "
            cellpadding="0"
            cellspacing="0"
          >
            <tbody>
              <tr style="vertical-align: top">
                <td
                  style="
                    word-break: break-word;
                    border-collapse: collapse;
                    vertical-align: top;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #f9f9f9;"><![endif]-->
      
                  <div style="padding: 0px">
                    <div
                      style="
                        max-width: 600px;
                        margin: 0 auto;
                        background-color: #003399;
                      "
                    >
                      <div class="u-row">
                        <div class="u-col u-col-100">
                          <div
                            style="
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                            "
                          >
                            <table
                              style="font-family: 'Cabin', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 20px;
                                      font-family: 'Cabin', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <table
                                      width="100%"
                                      cellpadding="0"
                                      cellspacing="0"
                                      border="0"
                                    >
                                      <tr>
                                        <td
                                          style="
                                            padding-right: 0px;
                                            padding-left: 0px;
                                          "
                                          align="center"
                                        >
                                          <amp-img
                                            alt="Image"
                                            src="https://drive.google.com/uc?export=view&id=1bjvveJiyhy9pxqZOCpc8MNJHUByP7roD"
                                            width="268"
                                            height="300"
                                            layout="intrinsic"
                                            style="width: 32%; max-width: 32%"
                                          >
                                          </amp-img>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
      
                  <div style="padding: 0px">
                    <div
                      style="
                        max-width: 600px;
                        margin: 0 auto;
                        background-color: #003399;
                      "
                    >
                      <div class="u-row">
                        <div class="u-col u-col-100">
                          <div
                            style="
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                            "
                          >
                            <table
                              style="font-family: 'Cabin', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 40px 10px 10px;
                                      font-family: 'Cabin', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <table
                                      width="100%"
                                      cellpadding="0"
                                      cellspacing="0"
                                      border="0"
                                    >
                                      <tr>
                                        <td
                                          style="
                                            padding-right: 0px;
                                            padding-left: 0px;
                                          "
                                          align="center"
                                        >
                                          <amp-img
                                            alt="Image"
                                            src="https://cdn.templates.unlayer.com/assets/1597218650916-xxxxc.png"
                                            width="335"
                                            height="93"
                                            layout="intrinsic"
                                            style="width: 26%; max-width: 26%"
                                          >
                                          </amp-img>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
      
                            <table
                              style="font-family: 'Cabin', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 10px;
                                      font-family: 'Cabin', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <div
                                      style="
                                        color: #e5eaf5;
                                        line-height: 140%;
                                        text-align: center;
                                        word-wrap: break-word;
                                      "
                                    >
                                      <p style="font-size: 14px; line-height: 140%">
                                        <strong
                                          >T H A N K S&nbsp; &nbsp;F O R&nbsp; &nbsp;S
                                          I G N I N G&nbsp; &nbsp;U P !</strong
                                        >
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
      
                            <table
                              style="font-family: 'Cabin', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 0px 10px 31px;
                                      font-family: 'Cabin', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <div
                                      style="
                                        color: #e5eaf5;
                                        line-height: 140%;
                                        text-align: center;
                                        word-wrap: break-word;
                                      "
                                    >
                                      <p style="font-size: 14px; line-height: 140%">
                                        <span
                                          style="font-size: 28px; line-height: 39.2px"
                                          ><strong
                                            ><span
                                              style="
                                                line-height: 39.2px;
                                                font-size: 28px;
                                              "
                                              >${subject}
                                            </span></strong
                                          >
                                        </span>
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
      
                  <div style="padding: 0px">
                    <div
                      style="
                        max-width: 600px;
                        margin: 0 auto;
                        background-color: #ffffff;
                      "
                    >
                      <div class="u-row">
                        <div class="u-col u-col-100">
                          <div
                            style="
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                            "
                          >
                            <table
                              style="font-family: 'Cabin', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 33px 55px;
                                      font-family: 'Cabin', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <div
                                      style="
                                        line-height: 160%;
                                        text-align: center;
                                        word-wrap: break-word;
                                      "
                                    >
                                      <p style="font-size: 14px; line-height: 160%">
                                        <span
                                          style="font-size: 22px; line-height: 35.2px"
                                          >Hi,
                                        </span>
                                      </p>
                                      <p style="font-size: 14px; line-height: 160%">
                                        <span
                                          style="font-size: 18px; line-height: 28.8px"
                                          >You're almost ready to get started. Please
                                          click on the button below to verify your
                                          email address and enjoy exclusive  services
                                          with us! </span
                                        >
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
      
                            <table
                              style="font-family: 'Cabin', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 10px;
                                      font-family: 'Cabin', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <div align="center">
                                      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse;  font-family:'Cabin',sans-serif;"><tr><td style="font-family:'Cabin',sans-serif;" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:46px; v-text-anchor:middle; width:235px;" arcsize="8.5%" stroke="f" fillcolor="#ff6600"><w:anchorlock/><center style="color:#FFFFFF;font-family:'Cabin',sans-serif;"><![endif]-->
                                      <a
                                        href="${url}"
                                        target="_blank"
                                        style="
                                          box-sizing: border-box;
                                          display: inline-block;
                                          font-family: 'Cabin', sans-serif;
                                          text-decoration: none;
                                          text-align: center;
                                          color: #ffffff;
                                          background-color: #ff6600;
                                          border-radius: 4px;
                                          width: auto;
                                          max-width: 100%;
                                          overflow-wrap: break-word;
                                          word-break: break-word;
                                          word-wrap: break-word;
                                        "
                                      >
                                        <span
                                          style="
                                            display: block;
                                            padding: 14px 44px 13px;
                                            line-height: 120%;
                                          "
                                          ><span
                                            style="
                                              font-size: 16px;
                                              line-height: 19.2px;
                                            "
                                            ><strong
                                              ><span
                                                style="
                                                  line-height: 19.2px;
                                                  font-size: 16px;
                                                "
                                                >${text}</span
                                              ></strong
                                            >
                                          </span>
                                        </span>
                                      </a>
                                      <!--[if mso]></center></v:roundrect></td></tr></table><![endif]-->
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
      
                            <table
                              style="font-family: 'Cabin', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 33px 55px 60px;
                                      font-family: 'Cabin', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <div
                                      style="
                                        line-height: 160%;
                                        text-align: center;
                                        word-wrap: break-word;
                                      "
                                    >
                                      <p style="line-height: 160%; font-size: 14px">
                                        <span
                                          style="font-size: 18px; line-height: 28.8px"
                                          >Thanks,</span
                                        >
                                      </p>
                                      <p style="line-height: 160%; font-size: 14px">
                                        <span
                                          style="font-size: 18px; line-height: 28.8px"
                                          >The Company Team</span
                                        >
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
      
                  <div style="padding: 0px">
                    <div
                      style="
                        max-width: 600px;
                        margin: 0 auto;
                        background-color: #e5eaf5;
                      "
                    >
                      <div class="u-row">
                        <div class="u-col u-col-100">
                          <div
                            style="
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                            "
                          >
                            <table
                              style="font-family: 'Cabin', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 10px 10px 33px;
                                      font-family: 'Cabin', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <div style="text-align: center; line-height: 0px">
                                      <a
                                        href="https://facebook.com/"
                                        target="_blank"
                                        style="
                                          display: inline-block;
                                          width: 32px;
                                          height: 32px;
                                          margin-right: 17px;
                                        "
                                      >
                                        <amp-img
                                          src="https://cdn.tools.unlayer.com/social/icons/circle-black/facebook.png"
                                          width="32"
                                          height="32"
                                        />
                                      </a>
                                      <a
                                        href="https://linkedin.com/"
                                        target="_blank"
                                        style="
                                          display: inline-block;
                                          width: 32px;
                                          height: 32px;
                                          margin-right: 17px;
                                        "
                                      >
                                        <amp-img
                                          src="https://cdn.tools.unlayer.com/social/icons/circle-black/linkedin.png"
                                          width="32"
                                          height="32"
                                        />
                                      </a>
                                      <a
                                        href="https://instagram.com/"
                                        target="_blank"
                                        style="
                                          display: inline-block;
                                          width: 32px;
                                          height: 32px;
                                          margin-right: 17px;
                                        "
                                      >
                                        <amp-img
                                          src="https://cdn.tools.unlayer.com/social/icons/circle-black/instagram.png"
                                          width="32"
                                          height="32"
                                        />
                                      </a>
                                      <a
                                        href="https://youtube.com/"
                                        target="_blank"
                                        style="
                                          display: inline-block;
                                          width: 32px;
                                          height: 32px;
                                          margin-right: 17px;
                                        "
                                      >
                                        <amp-img
                                          src="https://cdn.tools.unlayer.com/social/icons/circle-black/youtube.png"
                                          width="32"
                                          height="32"
                                        />
                                      </a>
                                      <a
                                        href="https://email.com/"
                                        target="_blank"
                                        style="
                                          display: inline-block;
                                          width: 32px;
                                          height: 32px;
                                          margin-right: 0px;
                                        "
                                      >
                                        <amp-img
                                          src="https://cdn.tools.unlayer.com/social/icons/circle-black/email.png"
                                          width="32"
                                          height="32"
                                        />
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
      
                  <div style="padding: 0px">
                    <div
                      style="
                        max-width: 600px;
                        margin: 0 auto;
                        background-color: #003399;
                      "
                    >
                      <div class="u-row">
                        <div class="u-col u-col-100">
                          <div
                            style="
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                            "
                          >
                            <table
                              style="font-family: 'Cabin', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 10px;
                                      font-family: 'Cabin', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <div
                                      style="
                                        color: #fafafa;
                                        line-height: 180%;
                                        text-align: center;
                                        word-wrap: break-word;
                                      "
                                    >
                                      <p style="font-size: 14px; line-height: 180%">
                                        <span
                                          style="font-size: 16px; line-height: 28.8px"
                                          >Copyrights &copy; Company All Rights
                                          Reserved</span
                                        >
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
      
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
          <!--[if mso]></div><![endif]-->
          <!--[if IE]></div><![endif]-->
        </body>
      </html>      
        `,
  };

  smtpTransport.sendMail(mailOptions, (err, infor) => {
    if (err) return err;
    return infor;
  });
};

module.exports = sendEmail;

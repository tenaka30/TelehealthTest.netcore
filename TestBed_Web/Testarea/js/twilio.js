$(document).ready(function () {
    console.log('code started');
    var AccessToken = require('twilio').jwt.AccessToken;
    var VideoGrant = AccessToken.VideoGrant;

    // Substitute your Twilio AccountSid and ApiKey details
    var ACCOUNT_SID = 'ACba27e58788d061cd17aacb6a4b5e725f';
    var API_KEY_SID = 'SK8943965af6554382d10c6ef1ac8c6398';
    var API_KEY_SECRET = 'XBcBakpqYYwH5rREEwVdbPGhoyYAijaq';

    // Create an Access Token
    var accessToken = new AccessToken(
        ACCOUNT_SID,
        API_KEY_SID,
        API_KEY_SECRET
    );

    // Set the Identity of this token
    accessToken.identity = 'example-user';

    console.log('Main var init completed');

    // Grant access to Video
    var grant = new VideoGrant();
    grant.room = 'cool room';
    accessToken.addGrant(grant);

    console.log('access granted');

    // Serialize the token as a JWT
    var jwt = accessToken.toJwt();
    console.log(jwt);

    console.log('token serialised');

    Twilio.Video.connect('$TOKEN', { name: 'my-new-room' }).then(function (room) {
        console.log('Successfully joined a Room: ', room);
        room.on('participantConnected', function (participant) {
            console.log('A remote Participant connected: ', participant);
        })
    }, function (error) {
        console.error('Unable to connect to Room: ' + error.message);
    });

    console.log('connect completed');
});

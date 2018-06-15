    // replace these values with those generated in your TokBox Account
    var apiKey = "46136642";
    var sessionId = "2_MX40NjEzNjY0Mn5-MTUyODgwMDU0ODcwOX56ekoxbWdNenBNZ2dCTTlmVnlIWlRKRFV-fg";
    var token = "T1==cGFydG5lcl9pZD00NjEzNjY0MiZzaWc9MmI1OTFiMGE5ZTQwYjBmYmM0ODQzNGY1MWM0NmEyMWZkYmQ2MDllZDpzZXNzaW9uX2lkPTJfTVg0ME5qRXpOalkwTW41LU1UVXlPRGd3TURVME9EY3dPWDU2ZWtveGJXZE5lbkJOWjJkQ1RUbG1WbmxJV2xSS1JGVi1mZyZjcmVhdGVfdGltZT0xNTI4ODc4NTU5Jm5vbmNlPTAuODg4Mzc5ODM4Mzg5NTA0MSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTI4OTAwMTU4JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";

    // (optional) add server code here
    initializeSession();


    // Handling all of our errors here by alerting them
    function handleError(error) {
        if (error) {
            alert(error.message);
        }
    }

    function initializeSession() {
        var session = OT.initSession(apiKey, sessionId);

        // Subscribe to a newly created stream
        session.on('streamCreated', function (event) {
            session.subscribe(event.stream, 'subscriber', {
                insertMode: 'append',
                width: '100%',
                height: '100%'
            }, handleError);
        });

        // Create a publisher
        var publisher = OT.initPublisher('publisher', {
            insertMode: 'append',
            width: '100%',
            height: '100%'
        }, handleError);

        // Connect to the session
        session.connect(token, function (error) {
            // If the connection is successful, publish to the session
            if (error) {
                handleError(error);
            } else {
                session.publish(publisher, handleError);
            }
        });
    }
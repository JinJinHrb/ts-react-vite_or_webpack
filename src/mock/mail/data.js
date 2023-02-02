export default [
    [
        // type
        'GET',
        // pathname
        '/email/host/mapping',
        // params
        {
            hostname: 'xt@xt.qiye.163.com'
        },
        {
            __delay__: 500,
            __response__: {
                entityGroups: [
                    [
                        {
                            protocol: 'SMTP',
                            hostEntry: {
                                hostname: 'smtphz.qiye.163.com',
                                port: 25,
                                sslPort: 465
                            }
                        },
                        {
                            protocol: 'IMAP',
                            hostEntry: {
                                hostname: 'imaphz.qiye.163.com',
                                port: 143,
                                sslPort: 993
                            }
                        }
                    ],
                    [
                        {
                            protocol: 'SMTP',
                            hostEntry: {
                                hostname: 'smtp.qiye.163.com',
                                port: 25,
                                sslPort: 465
                            }
                        },
                        {
                            protocol: 'IMAP',
                            hostEntry: {
                                hostname: 'imap.qiye.163.com',
                                port: 143,
                                sslPort: 993
                            }
                        }
                    ]
                ]
            }
        }
    ]
]

export default {
    type: 'object',
    title: 'xxx配置',
    properties: {
        hitRecoveryRule: {
            type: 'boolean',
            title: 'hitRecoveryRule',
            required: false
        },
        responsibleStatus: {
            type: 'string',
            title: 'responsibleStatus',
            required: false
        },
        webAddress: {
            type: 'string',
            title: 'webAddress',
            format: 'url'
        },
        contactModels: {
            type: 'array',
            title: 'contactModels',
            maxItems: 2,
            required: true,
            items: {
                type: 'object',
                properties: {
                    contactName: {
                        type: 'string',
                        title: 'contactName',
                        required: true
                    }
                }
            }
        }
    }
}

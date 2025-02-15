const demoData = [
    { id: 56, parentId: 62 },
    { id: 81, parentId: 80 },
    { id: 74, parentId: null },
    { id: 76, parentId: 80 },
    { id: 63, parentId: 62 },
    { id: 80, parentId: 86 },
    { id: 87, parentId: 86 },
    { id: 62, parentId: 74 },
    { id: 86, parentId: 74 }
]

const demoTree = {
    id: 74,
    parentId: null,
    children: [
        {
            id: 62,
            parentId: 74,
            children: [
                {
                    id: 63,
                    parentId: 62
                }
            ]
        },
        {
            id: 86,
            parentId: 74,
            children: [
                {
                    id: 87,
                    parentId: 86
                }
            ]
        }
    ]
}

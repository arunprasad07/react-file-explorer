const explorer = {
    id: 1,
    name: "root",
    isFolder: true,
    items: [
        {
            id: 2,
            name: "public",
            isFolder: true,
            items: [
                {
                    id: 3,
                    name: "public nested 1",
                    isFolder: true,
                    items: [
                        {
                            id: 4,
                            name: "index.html",
                            isFolder: false,
                            items: []
                        },
                        {
                            id: 5,
                            name: "package.json",
                            isFolder: false,
                            items: []

                        }
                    ]
                },
                {
                    id: 6,
                    name: "style.css",
                    isFolder: false,
                    items: []

                }
            ]
        },
        {
            id: 10,
            name: "package1.json",
            isFolder: false,
            items: []

        }
    ]
};

export default explorer;

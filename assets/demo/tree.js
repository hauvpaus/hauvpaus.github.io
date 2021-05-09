var viz;

function drawTree() {
    let un = "";
    let pw = "";

    fetch('./neo4j_config.json')
    .then(response => response.json())
    .then(data => {
        var config = {
        container_id: "viz",
        server_url: "bolt://hauvpausneo4j.southcentralus.cloudapp.azure.com/",
        server_user: data.un,
        server_password: data.pw,
        labels: {
            //"Character": "name",
            "Character": {
                "caption": "name",
                "size": "pagerank",
                "community": "community"
                //"sizeCypher": "MATCH (n) WHERE id(n) = {id} MATCH (n)-[r]-() RETURN sum(r.weight) AS c"
            }
        },
        relationships: {
            "INTERACTS": {
                "thickness": "weight",
                "caption": false
            }
        },
        initial_cypher: "MATCH (n)-[r]->(m) RETURN n,r,m"
    };
    viz = new NeoVis.default(config);
    viz.render();
    console.log(viz);
    })


}
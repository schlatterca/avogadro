// delete this ???
import { createClient } from "@sanity/client";

const sanity = createClient({
    projectId: "z2uq9iqi", // find this at manage.sanity.io or in your sanity.json
    dataset: "production", // this is from those question during 'sanity init'
    useCdn: true,
    apiVersion: "2021-03-25"
});

export default sanity;
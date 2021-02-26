const fetch = require('node-fetch');
export default async (req, res) => {
    const [_, pkg, ...rest] = req.url.substr(1, req.url.length).split('/')
    console.log(_, pkg, rest);
    const path = rest.join('/');
    console.log(`path: ${path}`)
    let latest;
    const apiRes = await (await fetch(`https://x.nest.land/api/package/${pkg}`)).json();
    console.log(apiRes);
    if (apiRes.latestStableVersion !== null) {
        latest = apiRes.latestStableVersion;
    } else if (apiRes.latestVersion !== null) {
        latest = apiRes.latestVersion;
    } else {
        latest = apiRes.packageUploadNames[apiRes.packageUploadNames.length - 1];
    }
    console.log(`latest ${path}`);
    res.redirect(`https://x.nest.land/${latest}/${path}`)
}
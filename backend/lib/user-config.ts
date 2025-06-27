import fs from 'fs';

export const getUserConfig = () => {
    const rawText = fs.readFileSync('./src/user-config.json').toString();
    return JSON.parse(rawText);
};

export const setUserConfig = (field: string, value: any)=> {
    const config = getUserConfig();
    config[field] = value;

    fs.writeFileSync('./src/user-config.json', JSON.stringify(config));
}
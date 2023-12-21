# SalesforceMetaDataXmlGeneratorGS

- You can use these JavaScript files to create XML on Google Sheet.

## 1-1. Create Custom Standard Field (Text, Number, Percent, Currency, Date)
- Specify data that you want to create a custom field on Google Sheet as below:
<img width="862" alt="image" src="https://github.com/mkzyk/SalesforceMetaDataXmlGeneratorGS/assets/20549208/d3158f3d-d0a6-49fc-979f-b0d863dafe4a">

- Run Apps Script (Extenstions > Apps Script)  
- Use `CreateStandardFieldXml.js` and copy XML from execution log.
- Paste it your object.xml

## 1-2. Craete Picklist Field (Using Global Picklist OR Standard Picklist)
- Specify data that you want to create a custom field on Google Sheet as below:
<img width="1091" alt="image" src="https://github.com/mkzyk/SalesforceMetaDataXmlGeneratorGS/assets/20549208/ec0daa17-bd64-452a-aeb3-ad6753c29de8">

- For Standard picklist, you should enter values separated as new line
- Use `CreatePicklistFieldXml.js` and copy XML from execution log.
- Paste it your object.xml

## 1-3. Create Lookup Field
- Specify data that you want to create a custom field on Google Sheet as below:
<img width="823" alt="image" src="https://github.com/mkzyk/SalesforceMetaDataXmlGeneratorGS/assets/20549208/61ec42b0-2615-45cd-b7b0-3cae9c32f797">

- Use `CreateLookUpFieldXml.js` and copy XML from execution log.
- Paste it your object.xml

## 2. Create Field Permission
- After you created a custom field, which doesn't reflect any permission on your desired user's profile
- Specify data that you want to add permission on a custom field on Google Sheet as below:
<img width="387" alt="image" src="https://github.com/mkzyk/SalesforceMetaDataXmlGeneratorGS/assets/20549208/6ec2e216-e6de-49aa-9476-b2a6e0b70685">

- Use `CreateAdminPermissionXml.js` and copy XML from execution log.
- Paste it your desired profile.xml

## 3. Create Page Layout 
- You can also place your custom field on your object's page layout, however, this script just distributes fields on two column layout
- i.e. If you created 10 fields, 5 fields will be on the left side, 5 fields will be on the right side.
- You can use same sheet as 2. Create Field Permission
- Use `CreateLayoutXml.js` and copy XML from execution log.
- Paste it your desired layout.xml

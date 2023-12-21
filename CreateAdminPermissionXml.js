function createAdminMeta() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var objectName = sheet.getRange("B1").getValue();
  var lastRow = sheet.getLastRow();
  var fieldNames = sheet.getRange("B3:B" + lastRow).getValues();

  var xml = '';
  for (var i = 0; i < fieldNames.length; i++) {
    var fieldName = fieldNames[i][0];
    if (fieldName !== '' && typeof fieldName === 'string' && fieldName !== '#N/A') {
      xml += '<fieldPermissions>\n';
      xml += '    <editable>true</editable>\n';
      xml += '    <field>' + objectName + '.' + fieldNames[i][0] + '</field>\n';
      xml += '    <readable>true</readable>\n';
      xml += '</fieldPermissions>\n';
    }
  }

  Logger.log(xml);
}

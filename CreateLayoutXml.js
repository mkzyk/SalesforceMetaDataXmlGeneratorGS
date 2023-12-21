function createLayoutMeta() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var lastRow = sheet.getLastRow();
    var fieldNames = sheet.getRange("B3:B" + lastRow).getValues();
  
    var xml = '';
    var layoutColumns = '';
    var half = Math.ceil(fieldNames.length / 2);
    for (var i = 0; i < fieldNames.length; i++) {
      if (fieldNames[i][0] !== '') {
        layoutColumns += '    <layoutItems>\n';
        layoutColumns += '        <behavior>Edit</behavior>\n';
        layoutColumns += '        <field>' + fieldNames[i][0] + '</field>\n';
        layoutColumns += '    </layoutItems>\n';
        // if count is reached half index OR it's reached last index, create XML 
        if ((i + 1) == half || i == fieldNames.length - 1) {
          xml += '<layoutColumns>\n';
          xml += layoutColumns;
          xml += '</layoutColumns>\n';
          layoutColumns = '';
        }
      }
    }
  
    Logger.log(xml);
  }
  
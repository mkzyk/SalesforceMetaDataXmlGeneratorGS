function createLookUpField() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = sheet.getDataRange().getValues();
    var xml = '<fields>\n';
    
    for (var i = 1; i < data.length; i++) {
      var row = data[i];
      xml += '    <fullName>' + row[0] + '</fullName>\n';
      xml += '    <deleteConstraint>' + row[1] + '</deleteConstraint>\n';
      xml += '    <description>My lookup field</description>\n';
      xml += '    <label>' + row[2] + '</label>\n';
      xml += '    <relationshipName>' + row[3] + '</relationshipName>\n';
      xml += '    <referenceTo>' + row[4] + '</referenceTo>\n';
      xml += '    <required>' + row[5] + '</required>\n';
      xml += '    <type>' + row[6] + '</type>\n';
      xml += '</fields>\n';
    }
    
    Logger.log(xml);
  }
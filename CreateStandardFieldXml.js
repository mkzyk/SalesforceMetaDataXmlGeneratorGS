function createStandardField() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = sheet.getDataRange().getValues();
    var xml = '';
    
    for (var i = 1; i < data.length; i++) {
      var row = data[i];
      var type = row[3];
      
      xml += '<fields>\n';
      xml += '    <fullName>' + row[0] + '</fullName>\n';
      xml += '    <label>' + row[1] + '</label>\n';
      xml += '    <required>' + row[2] + '</required>\n';
      xml += '    <type>' + type + '</type>\n';
      
      if (type === 'Text') {
        xml += '    <length>255</length>\n';
      } else if (['Currency', 'Number', 'Percent'].includes(type)) {
        xml += '    <precision>' + row[4] + '</precision>\n';
        xml += '    <scale>' + row[5] + '</scale>\n';
      }
      
      xml += '</fields>\n';
    }
    
    Logger.log(xml);
  }
  
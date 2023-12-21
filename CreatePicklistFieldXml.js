function createPickListMeta() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var xml = '';
  
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var type = row[3].replace(/ \(.*\)/, ''); // Remove (Global) or (Standard)
    
    if (type === 'Picklist') {
      if (row[3].includes('Global')) {
        xml += '<fields>\n';
        xml += '    <fullName>' + row[0] + '</fullName>\n';
        xml += '    <externalId>false</externalId>\n';
        xml += '    <label>' + row[1] + '</label>\n';
        xml += '    <required>' + row[2] + '</required>\n';
        xml += '    <trackHistory>false</trackHistory>\n';
        xml += '    <trackTrending>false</trackTrending>\n';
        xml += '    <type>' + type + '</type>\n';
        xml += '    <valueSet>\n';
        xml += '        <restricted>' + row[4] + '</restricted>\n';
        xml += '        <valueSetName>' + row[5] + '</valueSetName>\n';
        xml += '    </valueSet>\n';
        xml += '</fields>\n';
      } else if (row[3].includes('Standard')) {
        var fullNames = row[6].split('\n');
        var labels = row[7].split('\n');
        
        xml += '<fields>\n';
        xml += '    <fullName>Property__c</fullName>\n';
        xml += '    <description>My custom picklist field</description>\n';
        xml += '    <label>' + row[1] + '</label>\n';
        xml += '    <type>' + type + '</type>\n';
        xml += '    <valueSet>\n';
        xml += '        <valueSetDefinition>\n';
        xml += '            <sorted>false</sorted>\n';
        
        for (var j = 0; j < fullNames.length; j++) {
          xml += '            <value>\n';
          xml += '                <fullName>' + fullNames[j] + '</fullName>\n';
          xml += '                <default>false</default>\n';
          xml += '                <label>' + labels[j] + '</label>\n';
          xml += '            </value>\n';
        }
        
        xml += '        </valueSetDefinition>\n';
        xml += '    </valueSet>\n';
        xml += '</fields>\n';
      }
    }
  }
  
  Logger.log(xml);
}

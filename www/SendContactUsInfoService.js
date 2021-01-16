
// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (SendContactUsInfoService == null) var SendContactUsInfoService = {};
SendContactUsInfoService._path = '/dwr';
SendContactUsInfoService.execute = function(p0, callback) {
  dwr.engine._execute(SendContactUsInfoService._path, 'SendContactUsInfoService', 'execute', p0, callback);
}

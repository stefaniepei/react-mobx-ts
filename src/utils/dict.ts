const ErrorCode = {
  /** 10001 - 10050 System Common Error**/
  '10001': {
    'en_US': 'Error!',
    'zh_CN': '',
  },
  '10010': {
    'en_US': 'Invalid config path!',
    'zh_CN': '',
  },
  '10011': {
    'en_US': 'ConfigHelper Instance has not initialized!',
    'zh_CN': '',
  },
  '10012': {
    'en_US': 'TracerHelper Instance has not initialized!',
    'zh_CN': '',
  },
  '10021': {
    'en_US': 'ModuleOption does not exist!',
    'zh_CN': '',
  },
  '10022': {
    'en_US': 'ModuleOption\'s version dose not exist!',
    'zh_CN': '',
  },
  '10031': {
    'en_US': 'Database type not found!',
    'zh_CN': '',
  },
  '100312': {
    'en_US': 'Database config not found!',
    'zh_CN': '',
  },

  /** 31001 - 32000 Game Logic Error**/
  '31001': {
    'en_US': 'Not found game id!',
    'zh_CN': '',
  },
  '31002': {
    'en_US': 'Create guid error!',
    'zh_CN': '',
  },
  '31003': {
    'en_US': 'Create guid bind error!',
    'zh_CN': '',
  },
  '31004': {
    'en_US': 'Update session error!',
    'zh_CN': '',
  },
  '31005': {
    'en_US': 'Guid bound to other account!',
    'zh_CN': '',
  },
  '31006': {
    'en_US': 'Not found guid',
    'zh_CN': '',
  },
  '31007': {
    'en_US': 'Not found guest guid',
    'zh_CN': '',
  },
  '31008': {
    'en_US': 'Guid no guest! guid',
    'zh_CN': '',
  },
  '31009': {
    'en_US': 'AccountType is guest!',
    'zh_CN': '',
  },
  '31010': {
    'en_US': 'Old account no bind!',
    'zh_CN': '',
  },
  '31011': {
    'en_US': 'SessionId err!',
    'zh_CN': '',
  },

  /** 32001 - 33000 Permission Error**/
  '32001': {
    'en_US': 'Group no Found!',
    'zh_CN': '',
  },
  '32002': {
    'en_US': 'Create applicaiton error!',
    'zh_CN': '添加应用失败!',
  },
  '32003': {
    'en_US': 'Create application manager group error!',
    'zh_CN': '添加应用管理者用户组失败!',
  },
  '32004': {
    'en_US': 'Update applicaiton error!',
    'zh_CN': '更新应用失败!',
  },
  '32005': {
    'en_US': 'Update application manager group error!',
    'zh_CN': '更新应用管理者用户组的创建者失败!',
  },
  '32006': {
    'en_US': 'Create application has existed!',
    'zh_CN': '添加应用已存在!',
  },
  '32007': {
    'en_US': 'Database doesn\'t exist!',
    'zh_CN': '数据库不存在!',
  },
  '32008': {
    'en_US': 'Application doesn\'t exist!',
    'zh_CN': '应用不存在!',
  },
  '32009': {
    'en_US': 'Update application manager group doesn\'t exist!',
    'zh_CN': '更新应用管理者用户组不存在!',
  },
  '32010': {
    'en_US': 'Enable or disable application error!',
    'zh_CN': '启用或禁用应用失败!',
  },
  '32011': {
    'en_US': 'AppId not pass!',
    'zh_CN': 'appId未传!',
  },
  '32012': {
    'en_US': 'AppName not pass!',
    'zh_CN': 'appName未传!',
  },
  '32013': {
    'en_US': 'Update applicaiton private key error!',
    'zh_CN': '更新privateKey失败!',
  },
  '32014': {
    'en_US': 'Get application type error, appId not base server!',
    'zh_CN': '获取应用类别，需基础服务AppId!',
  },
  '32015': {
    'en_US': 'Get application type doesn\'t exist!',
    'zh_CN': '获取应用类别不存在数据!',
  },
  '32016': {
    'en_US': 'Application group doesn\'t exist!',
    'zh_CN': '应用的用户组不存在!',
  },
  '32017': {
    'en_US': 'Create permisssion has existed!',
    'zh_CN': '功能权限已存在!',
  },
  '32018': {
    'en_US': 'Create permisssion error!',
    'zh_CN': '创建功能权限失败!',
  },
  '32019': {
    'en_US': 'Update permisssion doesn\'t exist!',
    'zh_CN': '功能不存在!',
  },
  '32020': {
    'en_US': 'Update permisssion error!',
    'zh_CN': '更新功能权限失败!',
  },
  '32021': {
    'en_US': 'Enable or disable permisssion error!',
    'zh_CN': '启用或禁用功能失败!',
  },
}

export default ErrorCode

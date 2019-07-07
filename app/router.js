'use strict';

/**
 * 路由
 * @param {Egg.Application} app - 当前应用的实例
 * @author ruiyong-lee
 */
module.exports = app => {
  const { router, controller } = app;
  // const { weapp, user, utils, goodsOrder, goods, goodsCategory, freightPlan, deliveryTimeType } = controller;
  const { helloworld, uac } = controller;
  
  router.post('/helloworld/test', helloworld.test);

  // 用户登录
  router.post('/uac/auth/login', uac.auth.login);
  // 用户注册
  router.post('/uac/auth/register', uac.auth.register);
  // 添加角色
  router.post('/uac/auth/updateRole', uac.auth.updateRole2);

};

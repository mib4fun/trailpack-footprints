module.exports = {

  prefix: '',

  controllers: {
    method: '*',
    pluralize: true,
    ignore: [
      'FootprintController'
    ]
  },

  models: {
    options: {
      defaultLimit: 100,
      populate: true
    },

    actions: {
      create: true,
      find: true,
      update: true,
      destroy: true,

      createAssociation: true,
      findAssociation: true,
      updateAssociation: true,
      destroyAssociation: true
    }
  }
}

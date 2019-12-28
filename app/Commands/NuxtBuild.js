'use strict'

const { Command } = require('@adonisjs/ace')
const { Builder } = require('nuxt')

class NuxtBuild extends Command {
  static get signature() {
    return 'nuxt:build'
  }

  static get description() {
    return 'Build for production the NuxtJS application'
  }

  async handle(args, options) {
    const nuxt = use('Service/Nuxt')

    this.info('Building NuxtJS application...')

    await new Builder(nuxt).build()
  }
}

module.exports = NuxtBuild

import { observable, action, runInAction } from 'mobx'
import i18n from '../../common/i18n'

export default class Base {
  @observable count = +localStorage.getItem('count') || 0
  @observable locale = localStorage.getItem('locale') || 'zh_CN'
  @observable activePath = localStorage.getItem('activePath') || ''
  @observable i18n = i18n.instance.get(this.locale)
  @observable isScroll0 = true
  @observable languageSetter = false
  @observable erwei = ''

  @action('Base :: addCount1')
  add = () => {
    try {
      runInAction('Base :: add new count', () => {
        this.count++
        localStorage.setItem('count', this.count as any)
      })
    } catch (e) {
      runInAction('Base :: count rejected', () => {
        this.count = 0
      })
    }
  }

  @action('Base :: addCount1')
  set = (val) => {
    try {
      runInAction('Base :: add new count', () => {
        this.count = val
      })
    } catch (e) {
      runInAction('Base :: count rejected', () => {
        this.count = 0
      })
    }
  }

  @action('Base :: setHeaderZero')
  setHeaderZero = (val = true) => {
    this.isScroll0 = val
  }

  @action('Base :: getLanguageSetter')
  getLanguageSetter = () => {
    this.languageSetter = !this.languageSetter
  }

  @action('Base :: setLanguage')
  setLanguage = (val: string) => {
    this.locale = val
    localStorage.setItem('locale', val)
    this.setI18nData()
  }

  @action('Base :: showErwei')
  showErwei = (val) => {
    this.erwei = this.erwei === val ? '' : val
  }

  @action setI18nData = () => {
    this.i18n = i18n.instance.get(this.locale)
  }

}

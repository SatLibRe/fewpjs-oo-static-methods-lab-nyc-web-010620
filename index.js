class Formatter {
  static capitalize(name){
    return name.charAt(0).toUpperCase() + name.slice(1)
  }
  
  static sanitize(word){
    return word.replace(/[^0-9\-]/g,'')
  }
}
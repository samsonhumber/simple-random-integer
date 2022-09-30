function random(upper, lower) {
  //
  if (lower && upper) {
    return Math.floor(Math.random() * upper + lower);
  } else if(upper) {
    return Math.floor(Math.random() * (upper + 1));
  } else {
    throw console.error("Expected 1 or 2 arguments, you did not supply any arguments");
  }
}

export function gaussian(mean=0, std=1) {
  try{
    if(typeof mean !== 'number' || typeof std !== 'number') {
      console.log('error 1 thrown');
      throw "Only accepts number inputs"
    } else if (isNaN(mean) || isNaN(std)) {
      console.log('error 2 thrown');
      throw "Inputs cannot not be NaN"
    } else {
      // mean is centre of distribution - if not given, it is assumed 0, std is standard deviation, how 'wide' the distribution is - if not given, it is assumed 1
      // The approach here uses a Box-Muller transformation
      if (arguments.length>2){
        console.log('WARNING: you may have entered more than 2 arguments, any additional arguments are ignored.')
      }
      const uniforms = [Math.random(), Math.random()];
      const normals = [Math.sqrt(-2*Math.log(uniforms[0])) * Math.cos(2*Math.PI*uniforms[1])];

      // The orginal formula says that the sin version is independent but on same distribution
      //const normals = [Math.sqrt(-2*Math.log(uniforms[0])) * Math.cos(2*Math.PI*uniforms[1]), Math.sqrt(-2*Math.log(uniforms[0])) * Math.sin(2*Math.PI*uniforms[1])];

      return normals[0]*std + mean
    }
  } catch(err) {
    console.error('Invalid input arguments. Mean is', mean, ', standard deviation is', std);
    throw(err);
  }
  
  
}

export default random;

//console.log(random());

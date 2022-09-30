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

export function gaussian(mean, std) {
  // mean is centre of distribution - if not given, it is assumed 0
  // std is standard deviation, how 'wide' the distribution is - if not given, it is assumed 1
  // The approach here uses a Box-Muller transformation
  const uniforms = [Math.random(), Math.random()];
  const normals = [Math.sqrt(-2*Math.log(uniforms[0])) * Math.cos(2*Math.PI*uniforms[1]), Math.sqrt(-2*Math.log(uniforms[0])) * Math.sin(2*Math.PI*uniforms[1])];
  //console.log(uniforms, normals);
  if (mean && std && mean+std !== NaN) {
    return normals[0]*std + mean
  } else if(std && std !== NaN) {
    return normals[0]*std
  } else if (mean && mean !== NaN) {
    return normals[0] + mean
  } else {
    return normals[0]
  }  
}

export default random;

//console.log(random());

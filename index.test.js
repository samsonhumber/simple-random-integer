import { test, expect, describe } from '@jest/globals';
import { gaussian } from "./index.js";

describe('Gaussian function tests', () => {
    const sampleSize = 10000;
    const tolerance = 0.05;
    test('tests to see if the gaussian function distributes with a mean of 0 and standard deviation of 1 when no arguments passed', () => {
        //ARRANGE
        //const trialMean = 5;
        //const trialStd = 2;
        let gaussianSampleSum = 0;
        let squareGaussianSampleSum = 0
        for (let i=0; i<sampleSize; i++) {
            const newSample = gaussian();
            gaussianSampleSum += newSample;
            squareGaussianSampleSum += newSample ** 2;
        }
        
        //ACT 
        const actualMean = gaussianSampleSum / sampleSize; 
        const actualStd =  Math.sqrt(squareGaussianSampleSum / (sampleSize-1)); 
        console.log("Mean and std", actualMean, actualStd)
        //ASSERT
        expect(actualMean).toBeGreaterThan(0 - tolerance);
        expect(actualMean).toBeLessThan(0 + tolerance);
        expect(actualStd).toBeGreaterThan(1 - tolerance);
        expect(actualStd).toBeLessThan(1 + tolerance);
    });

    test('tests to see if the gaussian function distributes with a given mean and standard deviation', () => {
        //ARRANGE
        const trialMean = 5;
        const trialStd = 2;
        let gaussianSampleSum = 0;
        let squareGaussianSampleSum = 0
        for (let i=0; i<sampleSize; i++) {
            const newSample = gaussian(trialMean, trialStd);
            gaussianSampleSum += newSample;
            squareGaussianSampleSum += (newSample-trialMean) ** 2;
        }
        
        //ACT 
        const actualMean = gaussianSampleSum / sampleSize; 
        const actualStd =  Math.sqrt(squareGaussianSampleSum / (sampleSize-1)); 
        console.log("Mean and std", actualMean, actualStd)
        //ASSERT
        expect(actualMean).toBeGreaterThan(trialMean - tolerance);
        expect(actualMean).toBeLessThan(trialMean + tolerance);
        expect(actualStd).toBeGreaterThan(trialStd - tolerance);
        expect(actualStd).toBeLessThan(trialStd + tolerance);
    });
});

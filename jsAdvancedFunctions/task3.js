function divide(numerator, denominator) {
  if (typeof numerator !== "number" || typeof denominator !== "number") {
    throw new Error("Both numerator and denominator must be numbers.");
  }

  if (Number.isNaN(numerator) || Number.isNaN(denominator)) {
    throw new Error("Arguments cannot be NaN.");
  }

  if (denominator === 0) {
    throw new Error("Denominator cannot be 0.");
  }

  return numerator / denominator;
}


//виклик функції
try {
  console.log("Result:", divide(10, 2));
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Work completed");
}


try {
  console.log("Result:", divide(10, 0));
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Work completed");
}


try {
  console.log("Result:", divide("Luke, I am your nominator", 4));
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Work completed");
}

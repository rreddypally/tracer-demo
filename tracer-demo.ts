import { Tracer } from "@aws-lambda-powertools/tracer/lib/Tracer";

const tracer = new Tracer({ serviceName: "someName"});

console.log(tracer.getSegment());
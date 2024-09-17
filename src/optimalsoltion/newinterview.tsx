// need to build the html form ..............................
// need to learn the ts function ............................
// need to learn micro services in express js ...............

//CIRCULAR DEPENDENCY INJECTIONS
// circular dependency occurs when two or more modules or components depend on each other directly or indirectly
// a.service.ts
// @Injectable()
// export class AService {
//   constructor(
//     @Inject(forwardRef(() => BService))
//     private readonly bService: BService,
//   ) {}
// }

// // b.service.ts
// @Injectable()
// export class BService {
//   constructor(
//     @Inject(forwardRef(() => AService))
//     private readonly aService: AService,
//   ) {}
// }

import express, { Application } from "express";
import morgan from "morgan";
import  indexRouter  from "./routes/index.routes";
import  postRoutes  from "./routes/post.routes";
export class App {
  app: Application;


  constructor(private port?: number | string) {
    this.app = express();
    this.middlewares()
    this.settings()
    this.routes()
    
  }
  settings(){
      this.app.set('port', this.port || process.env.PORT || 3000)
  }

  routes(){
      this.app.use(indexRouter)
      this.app.use('/posts',postRoutes)
  }

  middlewares(){
      this.app.use(morgan('dev'));
      this.app.use(express.json())
  }
  async listen() {
    await this.app.listen(this.port);
    console.log('server on port 3000');
    
  }
}

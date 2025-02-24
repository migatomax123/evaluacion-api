import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { AlumnoModule } from './modulos/alumno/alumno.module';
import { ProfesorModule } from './modulos/profesor/profesor.module';
import { PracticaModule } from './modulos/practica/practica.module';
import { ExamenTeoricoModule } from './modulos/examenteorico/examen-teorico.module';
import { AlumnoRealizaPracticaModule } from './modulos/alumnorealizapractica/alumno-realiza-practica.module';
import { AlumnoHaceExamenTeoricoModule } from './modulos/alumnohaceexamenteorico/alumno-hace-examen-teorico.module';
import { ProfesorDisenaPracticaModule } from './modulos/profesordiseñapractica/profesor-disena-practica.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
      logging: false,
    }),
    AlumnoModule,
    ProfesorModule,
    PracticaModule,
    ExamenTeoricoModule,
    AlumnoRealizaPracticaModule,
    AlumnoHaceExamenTeoricoModule,
    ProfesorDisenaPracticaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
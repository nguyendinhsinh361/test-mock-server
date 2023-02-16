import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { PatrolDto } from './dto/patrol-base.dto';
import { ProviderDto, RSADto, TriageQuestionDto } from './dto/rsa-base.dto';

@Injectable()
export class RSAService {
  getProviders(query: any) {
    const { latitude, longitude } = query;
    const allProviders = JSON.parse(
      fs.readFileSync('./src/modules/rsa/mock-data/providers.json', 'utf-8'),
    );
    return allProviders;
  }

  getTriageQuestions(providerId: string) {
    const allRSAs = JSON.parse(
      fs.readFileSync('./src/modules/rsa/mock-data/rsa.json', 'utf-8'),
    ) as RSADto[];
    const findRSA = allRSAs.find((ele) => ele.roadsideAssistance.id);
    const allTriageQuestions = JSON.parse(
      fs.readFileSync(
        './src/modules/rsa/mock-data/triageQuestion.json',
        'utf-8',
      ),
    ) as TriageQuestionDto[];
    const triageQuestionFromProvider = allTriageQuestions.find(
      (ele) =>
        ele.initialQuestionId ===
        Object.keys(
          findRSA.roadsideAssistance.roadsideAssistanceRequest.triageAnswers,
        )[0],
    );
    return triageQuestionFromProvider;
  }

  createProvider(providerId: string, patrolDto: PatrolDto) {
    const allRSAs = JSON.parse(
      fs.readFileSync('./src/modules/rsa/mock-data/rsa.json', 'utf-8'),
    ) as RSADto[];
    let findRSA = allRSAs[0];

    return findRSA;
  }

  getAssistance(assistanceId: string) {
    const allRSAs = JSON.parse(
      fs.readFileSync('./src/modules/rsa/mock-data/rsa.json', 'utf-8'),
    ) as RSADto[];
    const findRSA = allRSAs.find(
      (ele) => ele.roadsideAssistance.id === assistanceId,
    );
    const allAddress = JSON.parse(
      fs.readFileSync('./src/modules/rsa/mock-data/address.json', 'utf-8'),
    ) as any[];
    let addressRandom = allAddress[(allAddress.length * Math.random()) | 0];
    findRSA.roadsideAssistanceStatus.location.latitude = addressRandom.latitude;
    findRSA.roadsideAssistanceStatus.location.longtitude =
      addressRandom.longtitude;
    return findRSA;
  }

  deleteAssistance(assistanceId: string) {
    const allRSAs = JSON.parse(
      fs.readFileSync('./src/modules/rsa/mock-data/rsa.json', 'utf-8'),
    ) as RSADto[];
    const allRSAsUpdate = allRSAs.filter(
      (ele) => ele.roadsideAssistance.id !== assistanceId,
    );
    fs.writeFileSync(
      './src/modules/rsa/mock-data/rsa.json',
      JSON.stringify(allRSAs),
    );
    return allRSAsUpdate;
  }
}

import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
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

  createProvider(providerId: string, rSADto: RSADto) {
    const allRSAs = JSON.parse(
      fs.readFileSync('./src/modules/rsa/mock-data/rsa.json', 'utf-8'),
    ) as RSADto[];
    const findRSA = allRSAs.find(
      (ele) => ele.roadsideAssistance.id === providerId,
    );
    return findRSA;
  }

  getAssistance(assistanceId: string) {
    const allRSAs = JSON.parse(
      fs.readFileSync('./src/modules/rsa/mock-data/rsa.json', 'utf-8'),
    ) as RSADto[];
    const findRSA = allRSAs.find(
      (ele) => ele.roadsideAssistance.id === assistanceId,
    );
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

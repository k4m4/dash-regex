import {expectType} from 'tsd';
import dashRegex = require('.');

expectType<RegExp>(dashRegex());
expectType<RegExp>(dashRegex({exact: true}));